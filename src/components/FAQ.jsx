import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    interpolate-size: allow-keywords;
  }

  html {
    font-family: system-ui;
    color-scheme: dark;
  }

  body {
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.6;
    min-height: 100dvh;

    background-image: radial-gradient(
      in oklch circle at top left,
      hsl(303, 100%, 26%, 0.08),
      transparent
    );
    background-repeat: no-repeat;
  }

  h1, h2, h3, h4, p, details, summary {
    margin-block-end: 0;
  }
`;

const PageLayout = styled.main`
  display: grid;
  grid-template-columns:
    minmax(2rem, 1fr)
    min(960px, 100% - 4rem)
    minmax(2rem, 1fr);

  margin-block: 5rem;

  container-type: inline-size;
  container-name: page-layout;

  & > * {
    grid-column: 2 / 3;
  }
`;

const FAQSection = styled.section`
  display: grid;
  gap: clamp(1rem, 10vw, 2.5rem);

  @container (width > 650px) {
    grid-template-columns: 250px 1fr;
  }
`;

const Header = styled.div``;

const Icon = styled.span`
  font-size: 3rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
  line-height: 1;
`;

const QAWrapper = styled.div`
  margin-block-start: 3.5rem;
  display: grid;
  gap: 1rem;
`;

const Item = styled.details`
  background: hsl(0 0% 5%);
  border: 1px solid hsl(0 0% 12%);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  overflow: hidden;

  & * {
    margin: 0;
  }

  & > p {
    padding-block: 1rem;
  }

  &::details-content {
    color: hsl(0 0% 78%);
    font-size: 1rem;
    block-size: 0;
    transition:
      block-size 1s,
      content-visibility 1s;
    transition-behavior: allow-discrete;
  }

  &:open::details-content {
    block-size: auto;
  }
`;

const Question = styled.summary`
  color: hsl(0 0% 98%);
  line-height: 1.3;
  margin-inline-start: 1rem;
  list-style-position: outside;
  cursor: pointer;

  &::marker {
    font-size: 0.75em;
    color: hsl(0 0% 40%);
  }
`;

const Answer = styled.p``;

export default function FAQ() {
  return (
    <>
      <GlobalStyle />
      <PageLayout className="page-layout">
        <FAQSection className="faq">
          <Header>
            <Icon className="section-icon" aria-hidden="true">
              🤔
            </Icon>
            <Title className="section-title">Frequently asked questions</Title>
          </Header>

          <QAWrapper className="questions-and-answers">
            <Item>
              <Question>Can I animate details/summary elements?</Question>
              <Answer>
                This used to be something that was impossible, but now thanks to
                modern CSS, it's actually pretty easy to do!
              </Answer>
            </Item>

            <Item>
              <Question>How is it possible?</Question>
              <Answer>
                There are a few different ways that you can do it. One of them
                is using <code>calc-size()</code>, but the easiest way is using{' '}
                <code>interpolate-size: allow-keywords;</code> and{' '}
                <code>transition-behavior: allow-discrete</code>.
              </Answer>
            </Item>

            <Item>
              <Question>What about browser support?</Question>
              <Answer>
                Browser support isn't great yet, but it’s a progressive
                enhancement. Older browsers will still work fine—just without
                animation.
              </Answer>
            </Item>

            <Item>
              <Question>What's the catch?</Question>
              <Answer>
                There is none! It’s simple and works well. This extra text is
                just here to make the content longer for demonstration purposes.
              </Answer>
            </Item>
          </QAWrapper>
        </FAQSection>
      </PageLayout>
    </>
  );
}
