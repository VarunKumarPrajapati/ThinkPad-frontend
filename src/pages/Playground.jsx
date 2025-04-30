import { Input, Button } from "../components/common";

export default function Playground() {
  const isDev = process.env.REACT_APP_ENV === "dev";
  return (
    <main className="w-screen h-screen font-poppins">
      {isDev ? (
        <div className="flex items-center justify-center w-full h-full">
          <form>
            <Input
              autoComplete="email"
              label="Email"
              name="email"
              placeholder="Enter Email"
            />
            <Input
              autoComplete="off"
              label="Password"
              name="password"
              placeholder="Enter Password"
              showToggle
              type="password"
            />
            <Button className="mt-3">Submit</Button>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </main>
  );
}
