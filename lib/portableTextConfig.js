import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaucet } from '@fortawesome/free-solid-svg-icons'; // Gebruik een icon dat bij je stijl past

export const PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-xl font-bold text-gray-800 py-2">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg font-semibold text-gray-800 py-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-md font-medium text-gray-700 py-2">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-sm leading-relaxed text-gray-700 py-2">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-600 mb-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 text-gray-700 py-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 text-gray-700 py-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-800">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-600">{children}</em>
    ),
    link: ({ value, children }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="my-6">
        <img
          src={urlFor(value.asset).width(800).url()}
          alt={value.alt || 'Afbeelding'}
          className="rounded-lg shadow-md border border-gray-200"
        />
      </div>
    ),
    divider: () => (
      <div className="relative my-16 p-8">
        {/* Horizontale lijn */}
        <div className="w-full border-t border-gray-300"></div>
        {/* Icoon in het midden */}
        <div className="absolute inset-0 flex justify-center -translate-y-3 pt-4">
          <div className="bg-white px-4">
            <FontAwesomeIcon
              icon={faFaucet} // Vervang met een passend icoon
              className="text-blue-500 text-xl"
            />
          </div>
        </div>
      </div>
    ),
  },
};
