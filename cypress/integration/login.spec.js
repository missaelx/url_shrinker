import user from '../fixtures/user.json'

describe("Login test", () => {
    beforeEach(() => {
        cy.visit("/login");
        cy.fixture('user.json').as('userData')
    });

    it("should render login page", () => {
        cy.contains('.button', "Login").should("exist");
    });

    it("should login with default admin account", () => {
        cy.fixture('user').then(userData => {
            cy.get('#email')
                .type(userData.email)
                .should("have.value", userData.email);
            cy.get('#password')
                .type(userData.password)
                .should("have.value", userData.password);
            cy.get('.button').click();
        })
    });
});