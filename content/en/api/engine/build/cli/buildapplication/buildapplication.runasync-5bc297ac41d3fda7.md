---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5bc297ac41d3fda728d17ac4b35b806485211748db97054067630d9a31186726
symbol: engine:Inno.Build.Cli:M:Inno.Build.Cli.BuildApplication.RunAsync(System.String[],System.Threading.CancellationToken)
title: BuildApplication.RunAsync
kind: api
owners:
- Inno.Build.Cli
apiSurface: source-clr
sourceFingerprint: bd9870d27e3035b7bd5d3a725b4a51eb11f7ff3ae1d3922d1496665e255de2be
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `arguments`:** The command and its documented options; help prints the supported command names.

**Parameter `cancellationToken`:** Cancels owned work and preserves completed publications according to their pipeline contracts.

## Returns

Zero on success, two on cancellation, or one on a command or execution failure.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The argument array is absent.
