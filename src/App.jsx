import "./App.css";
import UseStateComp from "./useState/UseStateComp";
import UseEffectComp from "./useEffect/UseEffectComp";
import UseRefComp from "./useRef/UseRefComp";
import UseMemoComp from "./useMemo/UseMemoComp";
import UseCallbackComp from "./useCallback/UseCallbackComp";
import CustomHookComp from "./customHook/CustomHookComp";

function App() {
  return (
    <div>
      <h2>Hooks</h2>
      <UseStateComp />
      <UseEffectComp />
      <UseRefComp />
      <UseMemoComp />
      <UseCallbackComp />
      <CustomHookComp />
    </div>
  );
}

export default App;
