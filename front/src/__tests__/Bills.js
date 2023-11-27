/**
 * @jest-environment jsdom
 */

import { screen, waitFor } from "@testing-library/dom"
import BillsUI from "../views/BillsUI.js"
import { bills } from "../fixtures/bills.js"
import { ROUTES_PATH } from "../constants/routes.js";
import { localStorageMock } from "../__mocks__/localStorage.js";
import router from "../app/Router.js";
import '@testing-library/jest-dom'

describe("Given I am connected as an employee", () => {
    describe("When I am on Bills Page", () => {
        // Vérifie que l'icône est bien mis en surbrillance
        test("Then bill icon in vertical layout should be highlighted", async () => {
            Object.defineProperty(window, 'localStorage', { value: localStorageMock })
            window.localStorage.setItem('user', JSON.stringify({
                type: 'Employee'
            }))
            const root = document.createElement("div")
            root.setAttribute("id", "root")
            document.body.append(root)
            router()
            window.onNavigate(ROUTES_PATH.Bills)
            await waitFor(() => screen.getByTestId('icon-window'))
            const windowIcon = screen.getByTestId('icon-window')

            expect(windowIcon).toHaveClass('active-icon');
        })

        // Vérifie le tri par date (du plus récent au plus ancien)
        test("Then bills should be ordered from earliest to latest", () => {
            document.body.innerHTML = BillsUI({ data: bills.sort((a, b) => ((a.date < b.date) ? 1 : -1)) })
            const dates = screen.getAllByText(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i).map(a => a.innerHTML)
            const antiChrono = (a, b) => ((a < b) ? 1 : -1)
            const datesSorted = [...dates].sort(antiChrono)
            expect(dates).toEqual(datesSorted)
        })

        // Vérifie que la page contient bien le titre "Mes notes de frais"
        test('Then bills page should contains "Mes notes de frais" title', async () => {
            document.body.innerHTML = BillsUI({ data: bills })
            await waitFor(() => screen.getByText("Mes notes de frais"))
            expect(screen.getByText("Mes notes de frais")).toBeTruthy()
        })
    })
})
