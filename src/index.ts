import Repository from "./service/repository";

function startService() {
  Repository.connect();
}
startService();
