---
title: Inno.Native.LibraryLoading
description: Resolve a product's explicitly deployed native paths without searching source caches or owning module handles.
uid: api.projects.inno-native-libraryloading
kind: project
owners:
  - Inno.Native.LibraryLoading
contracts:
  - architecture.build-artifacts
---
# Inno.Native.LibraryLoading

This project resolves native libraries and tool files from the selected product's deployment index. It owns path validation. BGCS Runtime or the actual consumer owns module loading, function tables and release; Build owns source discovery, compilation, immutable artifact selection and deployment.

## Resolve an explicit deployment

`NativeDllLoader.FindNativeLibrary` accepts an exact logical module ID and returns a validated absolute path. `FindNativeFile` accepts an exact registered tool or resource alias. Neither operation loads a library or searches the source cache.

The output root is the directory containing the loading-mechanism assembly. Single-file publication uses the application directory. The loader does not modify that directory or infer a source checkout.

Product composition writes `native/Deployment.index`. The index contains the selected target and explicit logical-library/file mappings. The loader does not infer operating systems, CPU names or file suffixes. A new system supplies an actual deployment mapping; static linkage does not use dynamic deployment discovery.

## Ownership and failure contracts

A resolved path is not a loaded-module handle or a lease. The consumer must acquire the real module owner, keep it alive while using addresses and release it according to its binding protocol. Raw native handles remain in the Native/adapter boundary; they do not become service-layer or script protocols.

Empty identities, path-bearing aliases and wildcards are rejected. Missing indexes, mappings and payloads fail explicitly. Duplicate mappings, unknown index fields and paths escaping the declared native directory are invalid. No alternate candidate is selected after failure.

Index decoding validates the complete current format. `NativeDeploymentIndex` freezes its dictionaries and encodes deterministic UTF-8 data. Its target is supplied by product composition; it is not reconstructed from host detection.

The operating system can still reject a library after its path has been resolved. Such module-loading errors belong to the actual loader/consumer and are not converted into successful path-discovery results.

## Resolve without transferring ownership

The following host-side example requires an already deployed module and a valid export name. The callback may use the address only while the library remains loaded; it must not retain it.

```csharp
using System;
using System.Runtime.InteropServices;
using Inno.Native.LibraryLoading;

internal static class DeployedSymbolExample
{
    public static void UseDeployedSymbol(
        string libraryName,
        string symbolName,
        Action<nint> useWhileLoaded
    ) {
        nint library = NativeLibrary.Load(NativeDllLoader.FindNativeLibrary(libraryName));
        try
        {
            nint function = NativeLibrary.GetExport(library, symbolName);
            useWhileLoaded(function);
        }
        finally
        {
            NativeLibrary.Free(library);
        }
    }
}
```

Static linkage instead uses generated target bindings and the owning product's link inputs. See [build artifacts and deployment](../../architecture/build-artifacts.md) for the producer and consumer lifecycle.

## API reference

Read the [native library-loading types](../types/native-libraryloading/index.md) for exact declarations, parameters and failure contracts.

