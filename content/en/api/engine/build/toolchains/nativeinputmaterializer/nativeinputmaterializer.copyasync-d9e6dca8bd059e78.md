---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d9e6dca8bd059e783b1ff899e2d209777986c5376049d17b0725f9fdecc55ae9
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeInputMaterializer.CopyAsync(Inno.Build.Toolchains.NativeBuildContext,System.String,System.String,System.Threading.CancellationToken)
title: NativeInputMaterializer.CopyAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 35369515e6bc7c4b499d7f09e20052c292497655cac3e8d2cfa59948f3108df4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The operation whose initial source bytes and hashing statistics are shared across components.

**Parameter `source`:** The absolute input file already declared by the component recipe.

**Parameter `destination`:** The absolute intermediate file owned exclusively by the component producer.

**Parameter `cancellationToken`:** Cancels copying before publication and preserves the prior intermediate file.

## Returns

True when bytes were copied and published; false when the existing content was identical.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The source changes relative to the operation's frozen input snapshot.

**Exception `T:System.IO.IOException`:** The source, destination or atomic candidate cannot be read or published.
