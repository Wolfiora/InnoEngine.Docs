---
# Generated metadata. Maintained by project synchronization tooling.
uid: project.inno-build-cli-integration-tests
symbol: project:Inno.Build.Cli.Integration.Tests
title: Inno.Build.Cli.Integration.Tests
kind: project
owners:
- Inno.Build.Cli.Integration.Tests
sourceFingerprint: abaece37b3facf1bcfa362018ce7b4189b5f2a8f50704c65cdcfb9aecdcc0e71
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: FLwolfy
description:
- Verify early rejection, explicit SDK selection and managed authoring commands.
outdated: false
---
# Inno.Build.Cli.Integration.Tests

`Inno.Build.Cli.Integration.Tests` checks the public [Build command entry](../../../architecture/projects/inno-build-cli.md). These integration tests own command admission and routing, so a simple command regression does not need the product integration suite merely to reach the CLI.

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
dotnet test tests/build/cli/Inno.Build.Cli.Integration.Tests/Inno.Build.Cli.Integration.Tests.csproj --configuration Debug --disable-build-servers -m:1 -nodeReuse:false
```

SDK selection and real script compilation require the declared SDK. Early argument-rejection cases must remain early; do not add product preparation to make their fixtures pass. No product or raw-binding API coverage is implied by these command tests.

[Browse the pinned command fixtures](https://github.com/Wolfiora/InnoEngine/tree/baed28a5cf8aa268df22d254c314f3ec86a8eb2f/tests/build/cli/Inno.Build.Cli.Integration.Tests). Follow [suite maintenance](../../validate-change.md#extend-a-suite-safely) when extending command behavior.
