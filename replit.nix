{ pkgs }: {
  deps = [
    pkgs.nodejs-20_x
    pkgs.nodePackages.npm
    pkgs.git
  ];
  env = {
    NODE_ENV = "development";
  };
}
