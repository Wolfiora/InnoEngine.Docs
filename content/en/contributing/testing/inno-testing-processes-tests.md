---
title: Child-process execution tests
description: Verify complete output capture, failure diagnostics and descendant termination.
uid: project.inno-testing-processes-tests
kind: project
owners:
  - Inno.Testing.Processes.Tests
---
# Child-process execution tests

`Inno.Testing.Processes.Tests` validates `NativeProcessTestHost.Run` through its public contract. Its embedded executable fixture is test infrastructure, not another daily engine entry point. These scenarios do not need BGCS, a GPU or a native product.

## Behavior covered

- Successful exit drains both standard output and standard error completely.
- Nonzero exit retains both streams, the command and the contract identity.
- Timeout preserves partial output and terminates descendants.
- Relative assembly paths and invalid execution budgets are rejected.

## Run and maintain

Use [the shared validation plan](../validate-change.md). A focused process-host diagnostic is:

```powershell
dotnet test tests/process/Inno.Testing.Processes.Tests/Inno.Testing.Processes.Tests.csproj --configuration Release --disable-build-servers -m:1 -nodeReuse:false
```

The machine must permit local process creation and testhost communication. Fixtures own and drain their child processes; cancellation must not leave descendants running. Follow [suite maintenance](../validate-change.md#extend-a-suite-safely). The reusable process-host library retains its own public API obligations even though these discovery classes are not product APIs.

[Browse the pinned project and scenarios](https://github.com/Wolfiora/InnoEngine/tree/ec506471b863c3b6e131d13ba78ff3ce9d31e15e/tests/process/Inno.Testing.Processes.Tests). This reference describes available assertions, not current-run certification.
