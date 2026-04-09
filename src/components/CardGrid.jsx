import React from 'react';
import styled from 'styled-components';
const Grid = styled.div`
  display: grid;
  gap: 2rem;

  grid-template-columns: minmax(6ch, 20ch) 1fr minmax(6ch, 20ch) 1fr;
  padding-block: 2rem;
  width: min(90%, 60rem);
  margin-inline: auto;
`;

const Card = styled.div`
  grid-column: span 2;

  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: min-content 1fr;
  gap: 1em;

  border: 3px solid black;
`;

const Img = styled.img`
  grid-column: 1;
  grid-row: 1 / span 2;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  grid-column: 2;

  padding-top: 1rem;
  padding-right: 1em;

  font-size: 1.75rem;
  line-height: 1;
  margin: 0;
`;

const Text = styled.p`
  grid-column: 2;

  padding-bottom: 1rem;
  padding-right: 1em;

  line-height: 1.5;
  margin: 0;
`;

function CardGrid() {
  return (
    <Grid>
      <Card>
        <Img src="https://unsplash.it/501" alt="" />
        <Title>Lorem ipsum</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          recusandae maxime distinctio quos ullam incidunt.
        </Text>
      </Card>

      <Card>
        <Img src="https://unsplash.it/502" alt="" />
        <Title>Omnis, veritatis odio.</Title>
        <Text>
          Enim molestiae recusandae ut dolor sit amet consectetur adipisicing.
          odit possimus eius inventore. Quasi illo unde neque? Itaque, deleniti
          adipisci?
        </Text>
      </Card>

      <Card>
        <Img src="https://unsplash.it/503" alt="" />
        <Title>Exercitationem, libero quam!</Title>
        <Text>
          Error maiores culpa eaque. Quam quisquam quae nostrum ipsa dolorum
          atque aperiam fugit soluta error!
        </Text>
      </Card>

      <Card>
        <Img src="https://unsplash.it/504" alt="" />
        <Title>Quibusdam, recusandae odio.</Title>
        <Text>
          Corporis laboriosam, neque est commodi architecto voluptatem, ipsam
          corrupti ullam similique eligendi hic qui natus?
        </Text>
      </Card>

      <Card>
        <Img src="https://unsplash.it/505" alt="" />
        <Title>Modi, exercitationem dicta.</Title>
        <Text>
          Laboriosam, aliquam tempore minus dolorem ullam et veniam asperiores,
          eveniet vitae odit itaque eligendi ducimus?
        </Text>
      </Card>

      <Card>
        <Img src="https://unsplash.it/506" alt="" />
        <Title>Dolore.</Title>
        <Text>
          Reprehenderit, labore. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sunt, aut. harum vitae voluptate alias saepe debitis
          quo perspiciatis, delectus fugiat modi eveniet.
        </Text>
      </Card>
    </Grid>
  );
}

export default CardGrid;
