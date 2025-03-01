import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useHackathons } from "@/context/contexts/hackathonContextProvider";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const { hackathons } = useHackathons();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });

  return (
    <div className="w-full col-span-10 p-4">
      <h1 className="text-3xl font-bold mb-4 tracking-wide">Your Hackathons</h1>
      <div className="grid items-center justify-center grid-cols-3 gap-y-4 gap-x-4 md:grid-cols-4 3xl:grid-cols-5 ">
        {hackathons.map((hackathon) => (
          <Card key={hackathon.id} className="w-[20rem]">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center">
                {hackathon.title}
              </CardTitle>
              <CardDescription>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://t4.ftcdn.net/jpg/08/44/50/57/360_F_844505742_FO1UOhyVspKvZRLXZKDJWl92PpP3errx.jpg"
                    alt="img"
                    className="w-full"
                  />
                </AspectRatio>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2 font-bold">
                From:{" "}
                <span className="font-normal">
                  {hackathon.date.from.split("T")[0]}
                </span>
                <span className="mx-1 font-normal">&#124;</span>
                To:{" "}
                <span className="font-normal">
                  {hackathon.date.to.split("T")[0]}
                </span>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, voluptate!
              </p>
              <Link className="mt-2.5 block">
                <Button>Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home;
