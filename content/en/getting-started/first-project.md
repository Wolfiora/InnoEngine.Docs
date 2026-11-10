---
title: Open your first project
description: Choose a project directory and understand what the first Editor session creates.
uid: getting-started.project
kind: tutorial
---
# Open your first project

Keep your game project separate from the engine checkout. Select its directory when launching the Editor, or pass its absolute path explicitly.

```sh
dotnet run --project entry/InnoEngine.Editor/InnoEngine.Editor.csproj -- /absolute/MyGame
```

Use an absolute path appropriate to your host. Selecting a directory opens that location; it does not imply that the engine creates scene, asset, or script templates.

## Establish a useful first workflow

1. Open the project through the normal Editor entry.
2. Inspect the [Console](../manual/editor/console.md) for current diagnostics.
3. Create content through the owning feature's workflow.
4. Select the scene and runtime content required for your intended execution.
5. Resolve compilation/import failures before proceeding to publishing.

Build support artifacts and publishing targets are separate from opening the desktop Editor. Review [platforms and products](../platforms/index.md) before preparing a distributable Player.

## Keep identity and recovery intact

A compilation failure should leave diagnostics. An unresolved reference should preserve its identity and recovery data. Neither condition should be hidden by clearing IDs, deleting project state, or indiscriminately removing caches.

Read [identity and Missing states](../manual/identity-and-missing.md) for the distinction between unresolved content and deletion.
