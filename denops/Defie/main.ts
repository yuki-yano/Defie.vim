import { Denops } from "./deps.ts";
import { defie_open, defie_up, start } from "./actions.ts";
import { ArgType } from "./types.ts";

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    call_Defie(args: unknown): void {
      const validated_args = args as ArgType;

      switch (validated_args.action) {
        case "open":
          defie_open(denops,validated_args.direction);
          break;
        case "up":
          defie_up(denops);
          break;
        default:
          start(denops, validated_args.path);
      }
    },
  };
}
