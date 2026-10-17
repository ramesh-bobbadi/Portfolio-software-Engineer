import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Projects } from "@/components/portfolio/sections";

afterEach(cleanup);

describe("Project details disclosure", () => {
  it("starts with every project's details collapsed", () => {
    render(<Projects />);
    expect(
      screen.queryByRole("region", { name: "LeaveFlow project details" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("region", { name: "OfflineIQ project details" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("region", { name: "CrashRisk AI project details" }),
    ).not.toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "See more" })).toHaveLength(3);
  });

  it("reveals only the selected project's skills and bullet points, then collapses them", () => {
    render(<Projects />);
    const firstDisclosure = screen.getAllByRole("button", { name: "See more" }).at(0);
    if (!firstDisclosure) throw new Error("LeaveFlow disclosure is missing");
    fireEvent.click(firstDisclosure);
    const details = screen.getByRole("region", { name: "LeaveFlow project details" });
    expect(within(details).getByText("JWT login for employees and administrators.")).toBeVisible();
    expect(within(details).getByText("PostgreSQL")).toBeVisible();
    expect(
      screen.queryByRole("region", { name: "OfflineIQ project details" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "View LeaveFlow source on GitHub (new tab)" }),
    ).toBeVisible();
    fireEvent.click(screen.getByRole("button", { name: "See less" }));
    expect(
      screen.queryByRole("region", { name: "LeaveFlow project details" }),
    ).not.toBeInTheDocument();
  });
});
