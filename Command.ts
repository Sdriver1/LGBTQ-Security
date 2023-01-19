import { ChatInputApplicationCommandData, CommandInteraction, CommandInteractionOptionResolver, PermissionResolvable } from "discord.js";
import { ExtendedClient } from "../structures/Client";

/**
 * {
 * name: "commandname",
 * desciption: ""
 * run: async ({ interactions }) => {
 * 
 * }
 * 
 * }
 */

interface RunOption {
    client: ExtendedClient,
    interactions: CommandInteraction,
    args: CommandInteractionOptionResolver
}

type RunFunction = (options: RunOption) => any; 

export type CommandType = {
    UserPermissions?:  PermissionResolvable[];
    run: RunFunction;
} & ChatInputApplicationCommandData;