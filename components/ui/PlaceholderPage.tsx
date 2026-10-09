type PlaceholderPageProps = {
  route: string;
};

// Route placeholder only. Not a finished layout and contains no site copy.
export function PlaceholderPage({ route }: PlaceholderPageProps) {
  return (
    <main>
      <h1>TODO: page title ({route})</h1>
      <p>TODO: owner-approved content from content/ goes here.</p>
    </main>
  );
}
