---
title: Explicit test source and output inputs
description: Resolve the declaring test assembly's checkout and SDK output owner without guessing paths.
uid: project.inno-testing-source
kind: project
owners: [Inno.Testing.Source]
exampleMode: host
exampleProjects: [Inno.Testing.Source]
---
# Explicit test source and output inputs

`Inno.Testing.Source` resolves input ownership for tests that consume real repository source or SDK outputs. It is not a runtime or release dependency. The consumer imports `tests/RepositoryInput.targets` and references this library instead of recompiling shared C# files.

## Resolve your own declaration

The test project containing this code must import that targets file before building:

```csharp
using System.IO;
using Inno.Testing.Source;

internal static class SourceInputs
{
    internal static bool HasSolution()
    {
        string root = TestRepository.GetRoot(typeof(SourceInputs).Assembly);
        return File.Exists(Path.Combine(root, "InnoEngine.sln"));
    }
}
```

Supply the calling test's own assembly explicitly. Copying its DLL elsewhere does not change the source root recorded in its metadata. If that checkout is unavailable, the test fails rather than searching the current directory, another worktree or old output.

## Source and build-output contracts

`GetRoot` returns the declared absolute checkout. Null input throws `ArgumentNullException`; missing, duplicate, relative or invalid declarations without the engine solution marker throw `InvalidOperationException`.

`GetArtifactsPath` returns the SDK's explicitly recorded independent output owner. With no independent declaration it returns null, leaving ordinary SDK output evaluation in charge. Empty, duplicate or relative output declarations fail; the method does not guess from `bin/obj`.

The targets record output ownership after SDK path evaluation and before assembly metadata generation, including explicit `ArtifactsPath` and `UseArtifactsOutput`. Ordinary output is not assigned a fabricated separate owner.

Queries read public metadata and file markers without retaining Assembly, Type, instances or delegates, creating directories or changing environment. [Architecture tests](inno-tooling-architecture-tests.md) exercise ownership and invalid declaration boundaries.

## API reference

[Types and exact member contracts](inno-testing-source.md). These declarations describe this support library, not a product or script API surface.
