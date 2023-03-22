/// <reference types ="cypress"/>
/// <reference types ='cypress-downloadfile' />

describe("ReadWrite actions", () => {
    it("User should be able to read from json file", () => {
        cy.fixture('reading.json').then((newdata) => {
            cy.log(newdata)
            cy.log(newdata.name)
        })
    })

    it("User should be able to read using read file", () => {
        cy.readFile('./cypress/fixtures/reading.json').then((validData) => {
            cy.log(validData.BirthPlace)
            cy.writeFile('NewFile.txt', validData)
            cy.writeFile('NewFile1.json', validData)
        })

    })
})

describe('Uploading & downloading files', () => {
    it('user should be able to upload files', () => {
        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html')
        cy.get('[name="userfile"]').attachFile('reading.json')
    })

    it('user should be able to download files', () => {
        cy.downloadFile('https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt', 'MyDownloads', 'first_download')

    })
})

