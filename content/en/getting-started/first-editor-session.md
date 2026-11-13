---
title: Start the Editor
description: Build and launch the normal InnoEngine Editor entry point.
uid: getting-started.editor
kind: tutorial
aliases:
  - launch editor
  - start editor
  - open editor
---
# Start the Editor

Use the normal Editor entry to build the product selected for your development host and open a project. You do not need to run the Build CLI first.

## Before you start

Complete [environment preparation](prerequisites.md). Run the following command from the engine repository root:

```sh
dotnet run --project entry/InnoEngine.Editor/InnoEngine.Editor.csproj
```

Alternatively, open `InnoEngine.sln` in your IDE and run the `InnoEngine.Editor` project under `entry/`.

## Select a project

Without a project path, the entry presents a directory chooser. Canceling exits normally. The product window opens only after the required build and preparation succeed.

The initial native build can take time. That preparation is distinct from application startup: the running Editor directly calls the built product entry and does not compile engine source during startup.

## Recognize the default workspace

A new project without an existing `editor.ini` receives the host's default layout: Scene and Game, File, Hierarchy, Inspector and Shader Editor, and Stats and Console. Existing layout files retain precedence and are not replaced when the project is reopened.

The initial layout does not create a sample scene, shader, script, or plugin. Continue with [your first project](first-project.md).

## Close the Editor normally

Normal shutdown lets the host finish work, unregister callbacks, save Editor state, retire resources, and release devices and native owners. Do not treat closing a window as permission to bypass a resource's own retirement protocol.

Rebuild after changing engine C# source. Project scripts and assets follow their own compilation, import, and reload workflows.
