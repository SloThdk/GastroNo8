export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Gastro No 8',
    description: 'Gourmetburgere, klassisk dansk mad og god øl midt i Blåvand. Café og bar med takeaway og bordbestilling.',
    url: 'https://gastrono8-demo.pages.dev',
    telephone: '+4561317240',
    email: 'Klaus@gastro8.dk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Blåvandvej 8a',
      addressLocality: 'Blåvand',
      postalCode: '6857',
      addressCountry: 'DK',
    },
    servesCuisine: ['Gourmet Burgere', 'Dansk', 'Smørrebrød', 'Bar'],
    priceRange: '££',
    currenciesAccepted: 'DKK',
    sameAs: ['https://www.facebook.com/GastroNo8/'],
    image: 'https://gastrono8-demo.pages.dev/images/hero.jpg',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
