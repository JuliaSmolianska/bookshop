import React from "react";
import Accordion from "react-bootstrap/Accordion";

const AboutAccordion = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <strong>Can I partner or advertise with Bookshop.org?</strong>
        </Accordion.Header>
        <Accordion.Body className="text-start">
          Absolutely. We offer a range of advertising and partnership
          opportunities. For partnerships and promotions, contact
          promotions@bookshop.org. For website and email advertising, contact
          ads@bookshop.org
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <strong>
            How do I return an order if I receive a book that I don't want?
          </strong>
        </Accordion.Header>
        <Accordion.Body className="text-start">
          You may return an unwanted item within 14 days of the delivery date
          for a full refund of the cost of the books returned including initial
          shipping costs. To ensure your package is returned correctly, please
          return the package to the address indicated below and display the
          order number prominently on the packaging. Return postage is to be
          covered by the sender. If you have any further questions regarding
          your return please reach out to: info@bookshop.org.Mail returns
          to:Bookshop.org: [your PO Number]Ingram Customer Returns Center 7311
          Innovation BoulevardFort Wayne, IN 46818
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <strong>Will Bookshop.org sell audiobooks and or ebooks?</strong>
        </Accordion.Header>
        <Accordion.Body className="text-start">
          We sell audiobooks via an affiliate partnership with Libro.fm. You can
          see the links on the product page of titles that are carried by them.
          We are working on an indie-friendly ebook solution.{" "}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <strong>How does Bookshop work with independent bookstores?</strong>
        </Accordion.Header>
        <Accordion.Body className="text-start">
          Bookshop supports indies in two ways: — 10% of direct and affiliate
          sales on Bookshop.org are added to an earnings pool that is evenly
          divided and distributed to independent bookstores every six months. —
          Stores that are affiliates also can share their Bookshop.org links on
          social media, email newsletters, or on their websites to earn 30% of
          the cover price (the full profit margin) on any sales they generate,
          without having to do the work of keeping inventory, picking, packing,
          shipping or handling complaints and returns. All books are sent from
          our wholesaler Ingram, not the bookstore's actual inventory.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <strong>
            Do affiliates have to disclose this websites, newsletters or social
            media posts?
          </strong>
        </Accordion.Header>
        <Accordion.Body className="text-start">
          Yes. Whenever a link is used on your website that results in a
          commission, you must disclose this information to site visitors,
          according to FTC rules. We suggest adding something like: "Disclosure:
          I am an affiliate of Bookshop.org where your purchases support local
          bookstores. I will earn a commission if you click through and make a
          purchase." to your website or post.{" "}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          <strong>
            If I'm an affiliate, how are the sales of my books handled?
          </strong>
        </Accordion.Header>
        <Accordion.Body className="text-start">
          Affiliates do not have to handle inventory, fulfillment, shipping, or
          customer service. All book sales are fulfilled by Ingram. Ingram's
          extensive inventory and regional warehouse system ensures Bookshop.org
          that books can reach customers in as soon as 2-3 days.{" "}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
          <strong>FAQ for Bookstore</strong>
        </Accordion.Header>
        <Accordion.Body className="text-start">
          Bookstores with physical locations who are ABA members (with one of
          the following ABA memberships: Provisional, Pop-up, Mobile, or
          Storefront) qualify as a bookseller on our platform and can be added
          to our bookstore finder map, receive a 30% commission on sales, and
          receive customer order information. Please email Justin Walls at
          justin.walls@bookshop.org if you qualify. —Bookshop.org's conversion
          rate for bookstore shop pages averages 12%. That's twice the industry
          average, and means that our stores earn more sales and revenue,
          without any overhead. —Our stores' curated book lists can go viral; a
          few have driven six-figure sales for several of our stores. They also
          can rank high on Google search results. —Over 1000 customers choose a
          bookstore to support on our store finder map every day. —We're always
          upgrading: since we launched, we've added many improvements for our
          stores, and we have lots more planned in 2022.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AboutAccordion;
