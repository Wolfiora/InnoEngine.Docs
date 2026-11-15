---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d9e6dca8bd059e783b1ff899e2d209777986c5376049d17b0725f9fdecc55ae9
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeInputMaterializer.CopyAsync(Inno.Build.Toolchains.NativeBuildContext,System.String,System.String,System.Threading.CancellationToken)
title: NativeInputMaterializer.CopyAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 631d4fe2b692d36adabad536a98edc182cd823e36d6a583d58bdc9abfe0795a3

# Authoring metadata. Edit these fields and the explanation below.
source: xml
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
