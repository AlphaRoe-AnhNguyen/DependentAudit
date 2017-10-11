using System.Web.Optimization;

namespace DependentAudit
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/js").Include(
                      "~/bower_components/angular/angular.js",
                      "~/bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
                      "~/bower_components/angular-ui-router/release/angular-ui-router.js",
                      "~/bower_components/angular-ui-select/dist/select.js",
                      "~/bower_components/angular-sanitize/angular-sanitize.js",
                      "~/Scripts/respond.js",
                      "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                    "~/app/app.js",
                    "~/app/controllers/mainController.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/bower_components/angular-ui-select/dist/select.css",
                      "~/Content/font-awesome-4.7.0/css/font-awesome.min.css",
                      "~/Content/site.css"));
        }
    }
}