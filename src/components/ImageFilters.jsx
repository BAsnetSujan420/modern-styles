import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 20px 0;
  justify-content: center;
`;

const Card = styled.div`
  width: 250px;
  text-align: center;

  span {
    display: block;
    margin-bottom: 0.5rem;
  }
`;

const Img = styled.div`
  height: 160px;
  border-radius: 1rem;
  background-image: url('https://picsum.photos/id/110/200/300');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    width: 50%;
    right: 0;
    left: auto;
    background: rgba(255, 255, 255, 0.3);
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  &.blur::after {
    backdrop-filter: blur(2px);
  }

  &.brightness::after {
    backdrop-filter: brightness(60%);
  }

  &.contrast::after {
    backdrop-filter: contrast(40%);
  }

  &.shadow::after {
    backdrop-filter: drop-shadow(4px 4px 10px blue);
  }

  &.grayscale::after {
    backdrop-filter: grayscale(30%);
  }

  &.hue::after {
    backdrop-filter: hue-rotate(120deg);
  }

  &.invert::after {
    backdrop-filter: invert(70%);
  }

  &.opacity::after {
    backdrop-filter: opacity(20%);
  }

  &.sepia::after {
    backdrop-filter: sepia(90%);
  }

  &.saturate::after {
    backdrop-filter: saturate(80%);
  }
`;

export default function ImageFilters() {
  return (
    <Container>
      <Card>
        <span>blur(2px)</span>
        <Img className="blur" />
      </Card>

      <Card>
        <span>brightness(60%)</span>
        <Img className="brightness" />
      </Card>

      <Card>
        <span>contrast(40%)</span>
        <Img className="contrast" />
      </Card>

      <Card>
        <span>drop-shadow(4px 4px 10px blue)</span>
        <Img className="shadow" />
      </Card>

      <Card>
        <span>grayscale(30%)</span>
        <Img className="grayscale" />
      </Card>

      <Card>
        <span>hue-rotate(120deg)</span>
        <Img className="hue" />
      </Card>

      <Card>
        <span>invert(70%)</span>
        <Img className="invert" />
      </Card>

      <Card>
        <span>opacity(20%)</span>
        <Img className="opacity" />
      </Card>

      <Card>
        <span>sepia(90%)</span>
        <Img className="sepia" />
      </Card>

      <Card>
        <span>saturate(80%)</span>
        <Img className="saturate" />
      </Card>
    </Container>
  );
}
