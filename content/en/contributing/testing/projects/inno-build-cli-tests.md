---
title: Build command boundary tests
description: Verify early rejection, explicit SDK selection and managed authoring commands.
uid: project.inno-build-cli-tests
kind: project
owners:
  - Inno.Build.Cli.Tests
---
# Build command boundary tests

`Inno.Build.Cli.Tests` checks the public [Build command entry](../../../architecture/projects/inno-build-cli.md). These integration tests own command admission and routing, so a simple command regression does not need the product integration suite merely to reach the CLI.

## Behavior covered

- Invalid commands fail before SDK discovery or cache cleanup.
- Prior cancellation creates no build state or authoring workspace.
- Invalid explicit source and SDK selection fail before taking checkout ownership or creating project state.
- Architecture verification reaches the public validator without preparing a product.
- Native verification rejects a target without an Editor runner before creating state.
- Script export and IDE projection use managed authoring without requiring native source or a tools target.

Script fixtures also include an unrelated broken product cache: managed authoring must not sweep that cache as a side effect of compiling scripts. Script cancellation retains its own workspace and publication rules.

## Run and maintain

Use [the shared validation workflow](../../validate-change.md). A focused CLI diagnostic is:

```powershell
dotnet test tests/build/Inno.Build.Cli.Tests/Inno.Build.Cli.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

SDK selection and real script compilation require the declared SDK. Early argument-rejection cases must remain early; do not add product preparation to make their fixtures pass. No product or raw-binding API coverage is implied by these command tests.

[Browse the pinned command fixtures](https://github.com/Wolfiora/InnoEngine/tree/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/build/Inno.Build.Cli.Tests). Follow [suite maintenance](../../validate-change.md#extend-a-suite-safely) when extending command behavior.
