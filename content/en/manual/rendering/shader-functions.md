---
title: Define a shader source function
description: Expose local algorithms as typed graph calls with explicit dependencies and consistent implementations.
uid: manual.rendering.shader-functions
kind: how-to
owners: [Inno.Rendering.Shaders]
---
# Define a shader source function

Use `.ishadersource` for a local algorithm that is unwieldy as visual nodes, depends on a source language or naturally forms a stable function call. It is a function library, not a complete source shader with `main`, passes or hidden GPU globals.

## Declare the public interface

Import Settings explicitly lists the exported functions; other functions are private helpers. The selected frontend derives ports from those declarations and checks includes, types and implementation consistency. Expose values, resources and side-effect dependencies in the function interface.

Inputs use `input.<name>`, outputs use `output.<name>`, and a non-void return uses `return`. An inout parameter contributes both input and output. `void` is only a missing return value, not a parameter, structure member or array element.

Structures retain their aggregate port and expose stable member ports. Expanding a structure does not change connection identity. Fixed arrays preserve exact element type and length; aggregate port identity includes a deterministic hash of the complete layout.

## Keep multiple implementations equivalent

List the adapter implementations and conditional definitions that must agree. Return types, parameter names, directions, order and aggregate layouts must match; private implementation names may differ. The neutral layer neither translates native code nor enumerates unknown macro combinations for you.

Analysis holds one generation operation scope across all implementations. A missing language is a recoverable diagnostic; an empty candidate list or repeated implementation key is invalid input. Restoring a frontend can recover the same source-function reference.

## Freeze every dependency

The controlled resolver captures bytes for each successful source read. Reading different contents for the same path within one analysis fails. A successful frontend cannot claim an unread dependency and let later compilation fetch a different version secretly.

The source fingerprint includes language, entry, paths/text, include edges and sorted defines, independent of implementation enumeration order. It is not the entire compile-cache key: graph semantics, Target, toolchain identity, capabilities, resource layout, optimization and variants still matter.

## Call through the graph

Lowering preserves the function body as a typed SourceCall for the adapter to embed. The public graph compiler does not decompile it into visual nodes. Source calls are conservatively side-effecting: unused results do not remove or reorder the call.

Keep required input connections explicit. Optional value inputs receive the exact typed zero described by [IR/default rules](../../architecture/shader-ir.md); opaque resources and effect-order ports cannot be optional. Invalid or dangling ports retain their identity for repair rather than reconnecting by position.
