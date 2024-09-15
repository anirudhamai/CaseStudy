using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace DBLibrary.Repo
{
    public interface IEmailService
    {
        Task SendEmailAsync(string email, string subject, string body, byte[] attachmentData = null);
    }
}