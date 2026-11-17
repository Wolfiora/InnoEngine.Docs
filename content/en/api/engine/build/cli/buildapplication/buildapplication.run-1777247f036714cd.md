---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1777247f036714cd6d019a41b218558667d6f066aec6d260511a6cdf5d4e0f53
symbol: engine:Inno.Build.Cli:M:Inno.Build.Cli.BuildApplication.Run(System.String[],System.Threading.CancellationToken)
title: BuildApplication.Run
kind: api
owners:
- Inno.Build.Cli
apiSurface: source-clr
reviewed: c7d48aa67f580a8ed51df65ca7922726272e42f578642e420c5778a0109f6476
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
