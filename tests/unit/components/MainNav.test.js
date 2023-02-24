import { screen, render } from "@testing-library/vue";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("display company name", () => {
    render(MainNav);
    screen.debug();
  });

  it("display menu items for navigation", () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuItemsText = navigationMenuItems.map(
      (element) => element.textContent
    );
    console.log(navigationMenuItemsText);
    expect(navigationMenuItemsText).toEqual(["Home", "About", "Contact"]);
  });
});
