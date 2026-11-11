---
title: Compile scripts and generate IDE projects
description: Use the managed authoring command with the actual Runtime and Editor script projections.
uid: contributing.compile-project-scripts
kind: how-to
owners:
  - Inno.Build.Cli
contracts:
  - project.inno-build-cli#managed-authoring-boundary
---
# Compile scripts and generate IDE projects

Compile an existing project's scripts without launching the Editor or preparing Native shader tools. The same command can generate IDE projects that use the engine's actual projected script APIs.

## Prerequisites

Use an engine checkout and its pinned .NET SDK. Supply an existing InnoEngine project directory with its assets, configuration and required plugins. Choose a caller-owned output directory for compiled scripts. This operation compiles project source; it is not a documentation query or a way to run arbitrary documentation snippets.

## Compile the project

From the engine root, replace the paths with your project and output locations:

```sh
dotnet run --project entry/InnoEngine.Build/InnoEngine.Build.csproj -- scripts --project /absolute/project --output /absolute/project/ExportedScripts --ide
```

On Windows, use absolute Windows paths and quote paths containing spaces. Pass `--dotnet` when an explicit SDK executable is required. Omit `--ide` to export scripts without also generating IDE projects.

The application opens the managed authoring workspace, compiles project and installed-plugin scripts, publishes the script output, and then generates IDE projects through the same compiler. Successful output identifies the published script directory. Opening the workspace does not create an SDL window or an ImGui session.

## Use the generated references

Open the generated IDE project. Its reference paths identify the actual Runtime and Editor script projections selected by the authoring closure. Use those references for script example validation; do not substitute host implementation DLLs or pick the newest-looking cache directory.

Generated projects and `Library/` are derived state. Change source, plugins or configuration through their actual owners and run the operation again. Host and script namespaces are different surfaces: a public CLR lifecycle method may intentionally be absent from scripts.

## Diagnose failures

Compiler diagnostics identify invalid source, unavailable projected members or missing dependencies. Fix the first reported cause and keep the original result when retrying. A failed compilation does not become a successful empty export.

`--tools-target` and `--support-packs` are rejected for this command because managed script preparation does not consume them. Game and plugin builds have different preparation requirements. A script compilation success does not certify a game package, Native window or platform device.

Cancellation stops owned work before a partial publication can become current. Do not delete active output or cache directories to interrupt the operation; use the caller's cancellation path.

## Next steps

- [Use the script API](../manual/scripting/use-script-api.md) and diagnose logical namespace access.
- [Understand compilation and projection](../architecture/script-compilation.md) before extending the compiler.
- [Validate documented examples](example-validation.md) against these prepared projections.
- [Add an Editor panel](../extending/editor-panels.md) to understand host-driven lifecycle and script availability.
- [Build CLI contracts](../api/projects/inno-build-cli.md) explain ownership and product preparation.
