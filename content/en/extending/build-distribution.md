---
title: Compose a build distribution
description: Register platform, content and managed deployment contributions without central target switches.
uid: extending.build-distribution
kind: how-to
owners: [Inno.Build.Composition, Inno.Build.Managed, Inno.Build.Products.Standard]
contracts: [project.inno-build-composition, project.inno-build-managed, project.inno-build-products-standard]
---
# Compose a build distribution

A distribution explicitly supplies supported platforms, content compilers, managed deployment providers and Native product closures. Shared Build mechanisms do not discover targets by scanning directories or infer a product from the current operating system.

## Separate platform and content decisions

A platform contribution binds target description, packager factory, Support Pack source, SDK provider and optional Editor project. A game contribution adds its content-compiler factory. The distribution freezes complete contributions and rejects duplicate IDs, mismatched sources and invalid capabilities before running tools.

CreateBindings checks the packager's ID, RID and deployment capabilities, then creates a matching content compiler with current Assets, SerializationRegistry and TypeCatalog. The compiler and packager must target the same identity.

Replacing the content compiler therefore does not require replacing the platform packager. Replacing an SDK provider does not add a platform branch to the common Pipeline.

## Keep tool execution and game targets distinct

BuildCompositionContext separates the execution host from the game's runtime target. toolsTarget identifies where authoring tools execute; it is not a substitute for the game target.

The context borrows an explicit neutral binding generator. Platform and Support Pack contributions receive that service without referencing the concrete BGCS implementation. SDK resolution uses only the matching registered contribution. An independent binding definition may have a Native-only SDK contribution without becoming a game-publication target.

## Declare the actual Native product closure

Each platform provides immutable nativeProducts. ResolveNativeProduct is the ordinary product-preparation selection boundary. A Task does not maintain another Editor/Player backend list or infer components from a target name.

StandardNativeComponents can compose Player, Editor, offline Shader-tool or explicit static-Player plans using provided graphics configuration, component options and deployment layout. StandardSupportPackRequirements derives requirements from actual plans/link format; StandardNativeDeployment encodes the validated loading manifest. These helpers do not find SDKs or execute compilation.

Only register implemented closures. Browser aggregation/final linking belongs to its own product chain; registration is not a claim that every ordinary Editor Native path applies there.

## Supply a managed deployment provider

Implement IManagedDeploymentCompiler with an open stable identity and truthful RID, dynamic-code, ahead-of-time and static-link capabilities. The catalog freezes providers and resolves support before staging. Existing CoreCLR, Mono Wasm, Mono Wasm AOT and NativeAOT IDs are not a closed enum or proof that every target supports them.

A request freezes absolute project/input/output/log paths without starting tools. A successful result describes a nonempty, distinct, in-bounds relative file set and the actual SDK identity. The compiler does not install the final product: Pipeline validates that result and delegates final layout to the platform packager.

## Retire the owning authoring session safely

Immutable distribution factories can be long-lived configuration. Bindings created with live authoring services cannot become a cross-session static compiler cache. The Pipeline owns each build transaction but borrows Assets, EngineHost, PluginEnvironment, Settings and ScriptCompiler.

Wait for all build work that uses those services before retiring their owner. Propagate cancellation; incomplete or unsupported results do not replace the previous complete product. See [Support Pack preparation](../contributing/support-packs.md) and [ownership](../architecture/ownership.md).
