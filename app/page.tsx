export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold	">Custom Date Range Picker</h1>
        <p className="text-xl font-bold mt-4">
          Made three custom Date picker for{" "}
          <a className="text-blue-600" href="https://ui.shadcn.com/">
            Shadcn/ui
          </a>{" "}
          :
          <br />
          customized month and year dropdown,preset date ranges, and the
          provision of two separate calendars—
          <br />
          one for selecting the starting date and another for choosing the end
          date.
        </p>
      </div>
    </div>
  );
}
