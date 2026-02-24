# ASP.NET Core

## Attribute Routing AND Conventional Routing

ASP.NET Core apps can mix the use of conventional routing and attribute routing. It's typical to use **conventional routes** for controllers serving **HTML pages** for browsers, and **attribute routing** for controllers serving **REST APIs**.

Actions are either conventionally routed or attribute routed. Placing a route on the controller or the action makes it attribute routed. **Actions that define attribute routes cannot be reached through the conventional routes and vice-versa**. Any route attribute on the controller makes **all actions** in the controller attribute routed.

Attribute routing and conventional routing use the same routing engine.

|                                    | conventionally-routed controllers | attribute-routed controllers |
| :---                               | :---: | :---: |
| endpoints.MapControllerRoute()     | Yes   | Yes   |
| endpoints.MapAreaControllerRoute() | Yes   | Yes   |
| endpoints.MapControllers()         | [![](https://img.shields.io/badge/No-red?style=for-the-badge)]() | Yes |

If you don't need conventionally-routed controllers, use `endpoints.MapControllers()` and routing attributes.

Otherwise use `endpoints.MapControllerRoute()` and/or `endpoints.MapAreaControllerRoute()`  
for both conventionally-routed controllers and attribute-routed controllers.

`endpoints.MapControllers()` is not needed for attribute routing  
if `endpoints.MapControllerRoute()` or `endpoints.MapAreaControllerRoute()` is used.

Sources:

* [Routing to controller actions in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/routing?view=aspnetcore-6.0#routing-mixed-ref-label)
* [Conventional vs Attribute Routing In ASP.NET Core Apps](https://thecodeblogger.com/2021/05/29/conventional-vs-attribute-routing-in-asp-net-core-apps/)

## Cookie Names

With ASP.NET Core 5.0 or later, cookie names must conform to the [token specification requirements](https://tools.ietf.org/html/rfc2616#section-2.2).

These characters cannot be in a cookie name:

```
( ) < > @ , ; : \ " / [ ] ? = { } space tab
```

So, for example, you cannot create a cookie with the name `company:logging:session-id`.  
However, underscores and dashes are allowed (`company_logging_session-id`).

Source: [Security: Cookie name encoding removed](https://docs.microsoft.com/en-us/dotnet/core/compatibility/aspnet-core/5.0/security-cookie-name-encoding-removed)

## Current User

In ASP.NET MVC and Web API, apps often refer to the current user using the `ClaimsPrincipal.Current` property. This property isn't set in ASP.NET Core, and any behavior in your app that depends on it will need to [migrate from ClaimsPrincipal.Current](https://docs.microsoft.com/en-us/aspnet/core/migration/claimsprincipal-current) by using:
* `ControllerBase.User`
* `HttpContext.User`
* Request the User as an argument
* [Request `IHttpContextAccessor` to get current `HttpContext` (if it exists)](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/http-context?view=aspnetcore-6.0)
  * `services.AddHttpContextAccessor()` to make `IHttpContextAccessor` available in the DI container
  * Use `HttpContextAccessor.HttpContext?.User` to get the current user's `ClaimPrincipal`

Source: [Compare authentication and authorization between ASP.NET MVC and ASP.NET Core](https://docs.microsoft.com/en-us/dotnet/architecture/porting-existing-aspnet-apps/authentication-differences)

## Logging Notes

Add this to appsettings.json:

```csharp
  "Logging": {
    "LogLevel": {
      "Default": "Trace",
      "Microsoft.AspNetCore": "Trace",
      "Microsoft.AspNetCore.HttpLogging.HttpLoggingMiddleware": "Trace"
    }
  },
```

Add this in HostingExtensions.cs:

```csharp
app.UseHttpLogging();
```

## Map vs MapWhen and Path/PathBase

`Map` will update the `Request.Path` and `Request.PathBase` to account for branching based on path (trimming the matched path segment off `Request.Path` and appending it to `Request.PathBase`), while a seemingly equivalent `MapWhen` predicate will not.  This affects anything downstream that uses the path, such as routing.  This is due to the difference between `MapMiddleware` and `MapWhenMiddleware`.

Source: [Stack Overflow](https://stackoverflow.com/questions/47997120/difference-between-map-and-mapwhen-branch-in-asp-net-core-middleware)

## Middleware Ordering

```C#
app.UseExceptionHandler();
app.UseHsts();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseCookiePolicy();
app.UseRouting();
app.UseCors();
app.UseAuthentication();
app.UseAuthorization();
app.UseSession();
app.UseMiddleware<CustomMiddleware>();
app.UseEndpoints();
```

  Sources: [Understanding Middleware In ASP.NET Core](https://www.c-sharpcorner.com/article/overview-of-middleware-in-asp-net-core/), [ASP.NET Core Middleware](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?view=aspnetcore-6.0#middleware)

## MVC Method Features
|                   | AddMvc() | AddControllersWithViews() | AddController() | AddRazorPages() |
| :---              | :---:    | :---:                     | :---:           | :---:           |
| Controllers       | Yes | Yes    | Yes    | Yes    |
| Model Binding     | Yes | Yes    | Yes    | Yes    |
| API Explorer      | Yes | Yes    | Yes    | [![](https://img.shields.io/badge/No-red?style=for-the-badge)]() |
| Authorization     | Yes | Yes    | Yes    | Yes    |
| CORS              | Yes | Yes    | Yes    | [![](https://img.shields.io/badge/No-red?style=for-the-badge)]() |
| Validations       | Yes | Yes    | Yes    | Yes    |
| Formatter Mapping | Yes | Yes    | Yes    | [![](https://img.shields.io/badge/No-red?style=for-the-badge)]() |
| Antiforgery       | Yes | Yes    | [![](https://img.shields.io/badge/No-red?style=for-the-badge)]() | Yes    |
| TempData          | Yes | Yes    | [![](https://img.shields.io/badge/No-red?style=for-the-badge)]() | Yes    |
| Views             | Yes | Yes    | [![](https://img.shields.io/badge/No-red?style=for-the-badge)]() | Yes    |
| Pages             | Yes | [![](https://img.shields.io/badge/No-red?style=for-the-badge)]() | [![](https://img.shields.io/badge/No-red?style=for-the-badge)]() | Yes    |
| Tag Helpers       | Yes | Yes    | [![](https://img.shields.io/badge/No-red?style=for-the-badge)]() | Yes    |
| Memory Cache      | Yes | Yes    | [![](https://img.shields.io/badge/No-red?style=for-the-badge)]() | Yes    |
  
  Source: [Dot Net Tutorials](https://dotnettutorials.net/lesson/difference-between-addmvc-and-addmvccore-method/)

## Preprocessor Symbols for Target Frameworks

```C#
#if NET8_0_OR_GREATER
    void NewMethodNotForFullFramework()
    {
    }
#endif
```

Reference: [Microsoft Learn - Target Frameworks - Preprocessor Symbols](https://learn.microsoft.com/en-us/dotnet/standard/frameworks#preprocessor-symbols)

## Sample Middleware to Show All Endpoints

```C#
            app.Use(async (context, next) =>
            {
                jar currentEndpoint = context.GetEndpoint();

                if (currentEndpoint is null)
                {
                    await next(context);
                    return;
                }

                var currentEndpointRouteRequiredValues = "";
                if (currentEndpoint is RouteEndpoint routeEndpoint)
                {
                    currentEndpointRouteRequiredValues = string.Join(",", routeEndpoint.RoutePattern.RequiredValues.Select(rv => rv.Key + "=" + rv.Value));
                }

                Console.WriteLine($"Selected Endpoint: {currentEndpoint.DisplayName} ({currentEndpointRouteRequiredValues})");

                var endpointDataSource = app.Services.GetService<EndpointDataSource>();
                if (endpointDataSource != null)
                {
                    foreach (var endpoint in endpointDataSource.Endpoints.Cast<RouteEndpoint>())
                    {
                        Console.WriteLine($"Endpoint: {endpoint.DisplayName} ({string.Join(",", endpoint.RoutePattern.RequiredValues.Select(rv => rv.Key + "=" + rv.Value).ToArray<string>())})");
                    }
                }

                await next(context);
            });
```

or after `app.UseEndPoints()`:

```C#
        var actionDescriptorCollectionProvider = app.Services.GetService<IActionDescriptorCollectionProvider>();
        var firstRoute = actionDescriptorCollectionProvider.ActionDescriptors.Items[8];
        var routes = actionDescriptorCollectionProvider.ActionDescriptors.Items
            .Where(ad => ad.AttributeRouteInfo != null)
            .Select(ad => ad.AttributeRouteInfo.Template)
            .ToList();
        foreach (var route in routes)
        {
            Console.WriteLine($"Route Template: {route}");
        }
```
