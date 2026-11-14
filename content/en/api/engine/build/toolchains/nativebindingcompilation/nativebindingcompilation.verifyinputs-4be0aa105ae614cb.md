---
uid: api.4be0aa105ae614cbe4e06300736f714563de1cc21e550e471e403cb064056595
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeBindingCompilation.VerifyInputs(System.Func{System.String,System.String},System.Threading.CancellationToken)"
source: xml
reviewed: 26d5cdc07c26b567a8caf24462d24b1b35ef9e64bac0a85220182d15a4339816
title: "NativeBindingCompilation.VerifyInputs"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Verifies the exact bytes at original or remapped roots before their use.

## Parameters

**Parameter `resolveRoot`:** Resolves a root identity to the selected physical or copied directory.

**Parameter `cancellationToken`:** Cancels verification without publishing a result.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** A required file has a different length or digest.

**Exception `T:System.IO.IOException`:** A required input is missing or cannot be read.

**Exception `T:System.OperationCanceledException`:** Verification was canceled.
