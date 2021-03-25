import "./App.css";
import "@fortawesome/fontawesome-free";
import { Route, Redirect, Switch } from "react-router-dom";
import quizContent from "./components/quizCont";
import quizApp from "./components/quizApp";
import QuizQuestions from "./components/quizQuestions";

function App() {
  return (
    <main className="container-fluid App">
      <Switch>
        <Route path="/quiz-app/content" component={quizContent} />
        <Route path="/quiz-app/questions" component={QuizQuestions} />
        <Route path="/quizapp-react" component={quizApp} />
        <Redirect from="/" exact to="/quizapp-react" />
      </Switch>
    </main>
  );
}

export default App;
