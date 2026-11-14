---
uid: api.1777247f036714cd6d019a41b218558667d6f066aec6d260511a6cdf5d4e0f53
symbol: "engine:Inno.Build.Cli:M:Inno.Build.Cli.BuildApplication.Run(System.String[],System.Threading.CancellationToken)"
source: xml
reviewed: 64d1fe0938b52c85f7ac86e4b7e7a2108cfa2630e8fadbb092cae491fa5ae39f
title: "BuildApplication.Run"
kind: api
owners: [Inno.Build.Cli]
apiSurface: source-clr
---

Runs one build command without taking ownership of the caller's cancellation source.

## Parameters

**Parameter `arguments`:** The command and its documented options; help prints the supported command names.

**Parameter `cancellationToken`:** Cancels owned work and preserves completed publications according to their pipeline contracts.

## Returns

Zero on success, two on cancellation, or one on a command or execution failure.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The argument array is absent.
