import React, { useState} from 'react';

function ReadMore({ content, maxChar }) {
  const [isSliced, setIsSliced] = useState(!(content.length <= maxChar));

  const text = isSliced ? content.slice(0, maxChar) : content;

  return (
    <>
      {isSliced ? (
        <div>
          <p>
            {text}
            <span>...</span>
          </p>
          <div>
            <button className="moreLess" onClick={() => setIsSliced(!isSliced)}>
              Read More...
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>{text}</p>
          <div>
            {!(content.length <= maxChar) && (
              <button
                className="moreLess"
                onClick={() => setIsSliced(!isSliced)}
              >
                Read Less...
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ReadMore;
