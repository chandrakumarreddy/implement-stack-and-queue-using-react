import styled from "@emotion/styled";
import * as React from "react";

const Container = styled.div`
  border: 1px solid #000;
  width: 600px;
  height: 400px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Flex = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #ccc;
`;

const Div2 = styled.div`
  margin: 0 auto;
  min-width: 200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 1rem;
  cursor: pointer;
  min-width: 100px;
  border-radius: 4px;
  border: none;
  &.active {
    background-color: green;
    color: #fff;
  }
`;

const Input = styled.input`
  padding: 1rem;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #ccc;
  min-width: 216px;
`;

const Output = styled.div`
  height: 30px;
  border: 1px solid #ccc;
  max-width: 200px;
  line-height: 30px;
`;

function StackQ() {
  const inputRef = React.useRef();
  const [option, setOption] = React.useState("stack");
  const handleClick = (val) => () => setOption(val);
  const [output, setOutput] = React.useState([]);
  const handlePush = () => {
    setOutput((s) => [...s, inputRef.current.value]);
  };
  const handlePop = () => {
    let rest;
    if (option === "queue") {
      rest = output.slice(1);
    } else {
      rest = output.slice(0, output.length - 1);
    }
    setOutput(rest);
  };
  React.useEffect(() => {
    inputRef.current.value = "";
  }, [output]);
  const result = [...output].reverse();
  return (
    <Container>
      <Div>
        <Flex>
          <Button
            onClick={handleClick("stack")}
            disabled={option === "stack"}
            className={option === "stack" ? "active" : null}
          >
            Stack
          </Button>
          <Button
            onClick={handleClick("queue")}
            disabled={option === "queue"}
            className={option === "queue" ? "active" : null}
          >
            Queue
          </Button>
        </Flex>
        <Flex>
          <Input type="text" placeholder="search" ref={inputRef} />
        </Flex>
        <Flex>
          <Button onClick={handlePush}>push</Button>
          <Button onClick={handlePop}>pop</Button>
        </Flex>
      </Div>
      <Div2>
        <h1>output</h1>
        {result.length
          ? result.map((_output) => <Output key={_output}>{_output}</Output>)
          : "empty"}
      </Div2>
    </Container>
  );
}

export default StackQ;

// virtualizatiob
// code slplitting
// dynamic imports
// memo()
// React.memo()
// useMemo
// useCallback

// ->
// new StackQ
// <StackQ/>

// v1 virtaual dom, dom
// -> return ()
// life cycle event ->
// v2 virtaul dom
// v2 virtaul dom-> v1 virtaul
// dom ->

// redux
// context api
// P1 -> p2 -. p3 -> p4 (props drillay)
// context
// Provider p1
// useContext()

// middlewares
// intercept state
// api inter

// useReducer(reducer)
// state,dispatch
// provider {state, dispatch}
// dispatch

// / - /about
