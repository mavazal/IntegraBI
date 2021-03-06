﻿using Model.Entities;
using Repository.Contracts;
using System;
using System.Threading.Tasks;
using Common;
using System.Collections.Generic;
using System.Linq;

namespace Repository
{
    public class ReportRepository : IReportRepository
    {
        public ReportRepository(AppDbContext context) : base(context)
        {
        }

        public override async Task<Report> Add(ReportDto model)
        {
            return await Task.Run(() => {
                var report = this.Create();
                report.DateCreated = DateTime.Now;
                report.Name = model.Name;
                report.Json = model.Json;
                report.UserId = model.UserId;
                if(this.Save(report)) {
                    return report;
                }                
                return null;
            });
        }

        public override async Task<Report> Update(ReportDto model)
        {
            var report = await this.Load(model.ReportId);
            return await Task.Run(() => {                
                report.Name = model.Name;
                report.Json = model.Json;
                if(this.Save(report)) {
                    return report;
                }                
                return null;
            });
        }

        public override async Task<IEnumerable<ReportDto>> GetReports(int userId) {
            return await Task.Run(() => {                
                return this.Context.Report.Where(x=>x.UserId == userId).Select(x=> new ReportDto() {
                    ReportId = x.Id,
                    UserId = userId,
                    DateCreated = x.DateCreated,
                    Name = x.Name,
                    Json = x.Json
                });
            });        
        }

        public override async Task<bool> Remove(int reportId)
        {
            return await Task.Run(() => {                
                return this.Delete(reportId,true);
            });        
        }
    }
}
