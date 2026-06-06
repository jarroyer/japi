import HomeAssistantService from "@/app/service/home-assistant.service";
import Env from "@/app/config/env";

const env = new Env();
const homeAssistantService = new HomeAssistantService(env.homeAssistantToken, env.homeAssistantUrl);

export default function Home() {
  const apiResp = homeAssistantService.api();

  return (
    <div>
      <p>Home Assistant: {apiResp}</p>
    </div>
  );
}
