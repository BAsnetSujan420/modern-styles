import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  --base: #7c3aed;
  --base: #29ced7;

  --lighter: oklch(from var(--base) clamp(0, l + 0.22, 1) calc(c * 0.9) h);
  --darker: oklch(from var(--base) clamp(0, l - 0.22, 1) calc(c * 0.92) h);
  --complement: hsl(from var(--base) calc(h - 180) s l);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const Card = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 12px;
  background: white;
  overflow: hidden;

  > div {
    width: 100%;
    height: 180px;
  }

  > p {
    padding: 6px;
    text-align: center;
    color: black;
  }

  .base {
    background: var(--base);
  }
  .lighter {
    background: var(--lighter);
  }
  .darker {
    background: var(--darker);
  }
  .complement {
    background: var(--complement);
  }
`;

function RelativeColor() {
  return (
    <Container>
      <Card>
        <div className="base" />
        <p>Base</p>
      </Card>
      <Card>
        <div className="lighter" /> <p>Lighter</p>
      </Card>
      <Card>
        <div className="darker" /> <p>Darker</p>
      </Card>
      <Card>
        <div className="complement" /> <p>Complement</p>
      </Card>
    </Container>
  );
}

export default RelativeColor;
