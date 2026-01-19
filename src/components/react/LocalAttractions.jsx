import { useState } from "react";
import { localAttractions } from "../../content/local-attractions/local-attractions";

export default function LocalAttractions() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header - matching site style */}
      <div className="text-center mb-8">
        <h2 className="text-xl lg:text-3xl font-bold text-center mb-4">
          Local Attractions & Activities
        </h2>
        <p className="text-base text-grey-neutral max-w-3xl mx-auto">
          Discover amazing experiences and attractions near Casa Patron. From
          outdoor adventures to cultural events, there&apos;s something for
          everyone in Alto and Ruidoso.
        </p>
      </div>

      {/* Activities List - clean row layout */}
      <div className="space-y-4">
        {localAttractions.map((attraction, index) => (
          <div
            key={attraction.name}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-bold text-secondary">
                      {attraction.name}
                    </h3>
                    {attraction.eventInfo?.dates && (
                      <span className="inline-flex items-center bg-gradient-to-r from-secondary to-tertiary text-white px-3 py-1 rounded-full text-sm font-medium">
                        📅 {attraction.eventInfo.dates}
                      </span>
                    )}
                  </div>

                  <p className="text-grey-neutral mb-3 leading-relaxed">
                    {attraction.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {attraction.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block bg-primary/20 text-grey-neutral px-3 py-1 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Content */}
                  {attraction.eventInfo && (
                    <>
                      <button
                        onClick={() => toggleCard(index)}
                        className="text-secondary hover:text-tertiary transition-colors duration-200 text-sm font-medium focus:outline-none flex items-center gap-2 mb-3"
                      >
                        {expandedCards[index]
                          ? "Show Less Details"
                          : "Show More Details"}
                        <span
                          className={`transform transition-transform duration-200 ${
                            expandedCards[index] ? "rotate-180" : ""
                          }`}
                        >
                          ↓
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedCards[index]
                            ? "max-h-96 opacity-100 mb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                          {attraction.eventInfo.schedule && (
                            <div>
                              <h4 className="text-sm font-bold text-secondary mb-2">
                                Schedule:
                              </h4>
                              <ul className="text-sm space-y-1">
                                {attraction.eventInfo.schedule.map(
                                  (item, i) => (
                                    <li
                                      key={i}
                                      className="text-grey-neutral flex items-start"
                                    >
                                      <span className="text-primary mr-2">
                                        •
                                      </span>
                                      {item}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}

                          {attraction.eventInfo.pricing && (
                            <div>
                              <h4 className="text-sm font-bold text-secondary mb-1">
                                Pricing:
                              </h4>
                              <p className="text-sm text-grey-neutral">
                                {attraction.eventInfo.pricing}
                              </p>
                            </div>
                          )}

                          {attraction.eventInfo.additionalInfo && (
                            <div>
                              <h4 className="text-sm font-bold text-secondary mb-1">
                                Additional Info:
                              </h4>
                              <p className="text-sm text-grey-neutral">
                                {attraction.eventInfo.additionalInfo}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0">
                  <a
                    href={attraction.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-secondary hover:bg-tertiary hover:scale-[1.02] transition-all duration-200 text-white font-medium px-6 py-3 rounded-lg text-sm whitespace-nowrap shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA - matching site style */}
      <div className="flex flex-col items-center justify-center py-8 sm:py-16 max-w-xl mx-auto mt-8">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-10 text-center">
          Plan Your Perfect Alto Getaway
        </h2>
        <p className="text-lg text-grey-neutral mb-6 text-center max-w-2xl">
          With so many activities and attractions nearby, Casa Patron is the
          perfect base for your New Mexico adventure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="bg-primary transition-all duration-200 hover:bg-yellow-400 hover:scale-[1.02] text-grey-neutral text-xl sm:text-2xl font-light rounded-full py-2 sm:py-2 px-6 sm:px-6 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            Back to Casa Patron
          </a>
          <a
            href="/contact-us/"
            className="bg-secondary transition-all duration-200 hover:bg-tertiary hover:scale-[1.02] text-white text-xl sm:text-2xl font-light rounded-full py-2 sm:py-2 px-6 sm:px-6 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </div>
  );
}
