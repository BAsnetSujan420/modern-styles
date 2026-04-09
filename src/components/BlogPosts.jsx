import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 1rem;
  margin-top: 1rem;
`;

const Heading = styled.h1`
  text-align: center;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  gap: 1rem;
  margin: 4rem auto 0;
`;

const Card = styled.div`
  display: grid;
  border: 1px solid #cacaca;
  border-radius: 6px;
  padding: 16px;
  grid-template-rows: subgrid;
  grid-row: span 3;
`;

const CardHeader = styled.div`
  display: flex;
  gap: 8px;
  border-bottom: 1px solid #cacaca;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
`;

const Content = styled.div`
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 1.5rem;
`;

const Action = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-decoration: underline;
  margin-top: 1rem;
`;

function BlogPosts() {
  return (
    <Wrapper>
      <Container>
        <Heading>Blog Posts</Heading>

        <Section>
          <Card>
            <CardHeader>
              <Title>Morning Routines That Actually Stick</Title>
              <Avatar src="https://picsum.photos/id/237/200" />
            </CardHeader>
            <Content>
              A three-step ritual to jump-start focus before your first coffee.
              Get your things done while the world is still asleep!
            </Content>
            <Action>Read more</Action>
          </Card>

          <Card>
            <CardHeader>
              <Title>Why Plants Make You Happier</Title>
              <Avatar src="https://picsum.photos/id/230/200" />
            </CardHeader>
            <Content>
              Science-backed reasons to add a little green to your workspace
              today.
            </Content>
            <Action>Read more</Action>
          </Card>

          <Card>
            <CardHeader>
              <Title>Five Podcasts You'll Binge This Weekend</Title>
              <Avatar src="https://picsum.photos/id/239/200" />
            </CardHeader>
            <Content>Hand-picked shows for tech and stories.</Content>
            <Action>Read more</Action>
          </Card>

          <Card>
            <CardHeader>
              <Title>Keyboard Shortcuts You will Use Daily</Title>
              <Avatar src="https://picsum.photos/id/217/200" />
            </CardHeader>
            <Content>
              Save precious seconds with simple combos for Mac, Windows, and
              Linux. Those shortcuts will boost your productivity!
            </Content>
            <Action>Read more</Action>
          </Card>
        </Section>
      </Container>
    </Wrapper>
  );
}

export default BlogPosts;
