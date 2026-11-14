---
uid: api.8d71b54ead2d5109febf64bb062d45f6698174bb65ba5a33187bb474f94ccdb0
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ManagedBuildExecution.VerifyAsync(System.Threading.CancellationToken)"
source: xml
reviewed: 3c5d263101537c16900a27518d29c8ba3577c3385bd76503d6c8b4db4e39a9c7
title: "ManagedBuildExecution.VerifyAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Checks that owned source copies still match the bytes accepted before compilation.

## Parameters

**Parameter `cancellationToken`:** Cancels complete source verification before the consumer publishes its output.

## Returns

Completion only when every owned input remains unchanged.

## Exceptions

**Exception `T:System.InvalidOperationException`:** A tool changed a fixed input during execution.

**Exception `T:System.ObjectDisposedException`:** This execution no longer owns the workspace.
