import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for bdn-angular', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be bdn-angular', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('bdn-angular');
    })
  });

  it('network-name should be book-distribution@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('book-distribution@0.0.1.bna');
    });
  });

  it('navbar-brand should be bdn-angular',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('bdn-angular');
    });
  });

  
    it('Book component should be loadable',() => {
      page.navigateTo('/Book');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Book');
      });
    });

    it('Book table should have 8 columns',() => {
      page.navigateTo('/Book');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(8); // Addition of 1 for 'Action' column
      });
    });
  
    it('Amount component should be loadable',() => {
      page.navigateTo('/Amount');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Amount');
      });
    });

    it('Amount table should have 3 columns',() => {
      page.navigateTo('/Amount');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('Library component should be loadable',() => {
      page.navigateTo('/Library');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Library');
      });
    });

    it('Library table should have 3 columns',() => {
      page.navigateTo('/Library');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Student component should be loadable',() => {
      page.navigateTo('/Student');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Student');
      });
    });

    it('Student table should have 4 columns',() => {
      page.navigateTo('/Student');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('issueBook component should be loadable',() => {
      page.navigateTo('/issueBook');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('issueBook');
      });
    });
  
    it('returnBook component should be loadable',() => {
      page.navigateTo('/returnBook');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('returnBook');
      });
    });
  

});