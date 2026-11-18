---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4be0aa105ae614cbe4e06300736f714563de1cc21e550e471e403cb064056595
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingCompilation.VerifyInputs(System.Func{System.String,System.String},System.Threading.CancellationToken)
title: NativeBindingCompilation.VerifyInputs
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 136342edea344aa2b13c35c97e81771e0c84a55f1fcf58555f6072a404b429c8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `resolveRoot`:** Resolves a root identity to the selected physical or copied directory.

**Parameter `cancellationToken`:** Cancels verification without publishing a result.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** A required file has a different length or digest.

**Exception `T:System.IO.IOException`:** A required input is missing or cannot be read.

**Exception `T:System.OperationCanceledException`:** Verification was canceled.
