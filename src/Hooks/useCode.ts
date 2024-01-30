import { useState, useEffect } from 'react';
import { Code } from '../types/code';

function useCode(input: string) {
  const [code, setCode] = useState<Code>();
  const [loading, setLoading] = useState(false);

  const encodeInput = encodeURIComponent(input);

  useEffect(
    function () {
      async function fetchCode() {
        setLoading(true);
        try {
          const res = await fetch(
            `https://api.zippopotam.us/CZ/${encodeInput}`
          );
          const data = await res.json();
          setCode(data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
      fetchCode();
    },
    [encodeInput]
  );

  return { code, loading };
}

export default useCode;
