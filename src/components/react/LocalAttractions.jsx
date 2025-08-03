import { useState } from "react";
import { localAttractions } from "../../utils/localAttractions.js";

export default function LocalAttractionCards() {
  // State to track which cards are expanded
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <div
        id="activities"
        className="mx-auto max-w-4xl w-full flex items-center justify-center"
      >
        <h3 className="text-xl lg:text-3xl font-bold w-full text-center mb-4 pb-4">
          Local Attractions & Events
        </h3>
      </div>
      <div className="flex flex-wrap justify-center">
        {localAttractions.map((attraction, index) => (
          <div
            className="flex flex-col justify-between max-w-sm rounded-xl border-grey-neutral bg-grey-neutral border overflow-hidden shadow-md m-4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 transition-all duration-300"
            key={attraction.name}
          >
            <div className="px-2 pb-4 text-white">
              {/* Title and Basic Info - Always Visible */}
              <div className="font-bold text-xl mb-2 text-primary">
                {attraction.name}
              </div>
              <p className="text-base mb-2">{attraction.description}</p>

              {/* Quick Preview of Dates - Always Visible for Events */}
              {attraction.eventInfo?.dates && (
                <p className="text-sm font-medium text-primary mt-2">
                  {attraction.eventInfo.dates}
                </p>
              )}

              {/* Expandable Event Details */}
              {attraction.eventInfo && (
                <>
                  <button
                    onClick={() => toggleCard(index)}
                    className="mt-3 text-primary hover:text-secondary transition-colors duration-200 text-sm font-medium focus:outline-none flex items-center gap-2"
                  >
                    {expandedCards[index] ? "Show Less" : "Show More"}
                    <span className="transform transition-transform duration-200">
                      {expandedCards[index] ? "↑" : "↓"}
                    </span>
                  </button>

                  {/* Expandable Content */}
                  <div
                    className={`mt-3 overflow-hidden transition-all duration-300 ${
                      expandedCards[index]
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {attraction.eventInfo.schedule && (
                      <div className="mb-3">
                        <h4 className="text-sm font-bold text-primary mb-1">
                          Schedule:
                        </h4>
                        <ul className="text-sm space-y-1">
                          {attraction.eventInfo.schedule.map((time, idx) => (
                            <li key={idx} className="text-gray-200">
                              • {time}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {attraction.eventInfo.pricing && (
                      <div className="mb-3">
                        <h4 className="text-sm font-bold text-primary mb-1">
                          Pricing:
                        </h4>
                        <p className="text-sm text-gray-200">
                          {attraction.eventInfo.pricing}
                        </p>
                      </div>
                    )}

                    {attraction.eventInfo.notes && (
                      <div className="mb-3">
                        <h4 className="text-sm font-bold text-primary mb-1">
                          Additional Info:
                        </h4>
                        <p className="text-sm text-gray-200">
                          {attraction.eventInfo.notes}
                        </p>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-3">
                {attraction.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block bg-primary text-grey-neutral px-2 py-1 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer with Link */}
            <div className="px-2 pt-2">
              <a
                href={attraction.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary hover:bg-tertiary transition-colors duration-200 text-white text-center py-2 px-4 rounded-full text-sm font-medium w-full"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
