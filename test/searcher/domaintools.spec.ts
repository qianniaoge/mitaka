import { expect } from "chai";
import "mocha";
import { DomainTools } from "../../src/lib/searcher";

describe("DomainTools", () => {
  const subject = new DomainTools();

  it("should support IP & Domain type IOC", () => {
    expect(subject.supportedTypes).to.deep.equal(["ip", "domain"]);
  });

  describe("#searchByIP", () => {
    it("should return URL", () => {
      expect(subject.searchByIP("1.1.1.1")).to.equal(
        "https://whois.domaintools.com/1.1.1.1"
      );
    });
  });

  describe("#searchByDomain", () => {
    it("should return URL", () => {
      expect(subject.searchByDomain("github.com")).to.equal(
        "https://whois.domaintools.com/github.com"
      );
    });
  });
});
